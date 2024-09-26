import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";

import { formSchema } from "@/zod/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface Inputs {
  image: File | null; // Change image type to File
  productTitle: string;
  description: string;
}

export default function AddDrinks() {

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');
  const [imageBinary, setImageBinary] = useState<string | null>(null); // State to store the binary data

  // validation // 
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name); // Update the state with the selected file name
      // Set file name to form input (to validate)
      register('image').onChange({ target: { value: file.name } });
      readFileAsBinary(file); // Read the file as binary
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name); // Update the state with the dropped file name
      register('image').onChange({ target: { value: file.name } });
      readFileAsBinary(file); // Read the file as binary
    }
  };

  const readFileAsBinary = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryString = e.target?.result as string;
      setImageBinary(binaryString); // Store the binary data in state
    };
    reader.readAsBinaryString(file); // Read the file as binary string
  };

  const {mutate} = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post('http://localhost:4000/api/drinks', {
        name: data.name,
        description: data.description,
      });
      return res.data;
    },
    onSuccess: async (data) => {
      console.log("Data:", data);
    },
  })

  const onSubmit = (data: Inputs) => {
    mutate({
      name: data.productTitle,
      description: data.description,
      image: imageBinary,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full mt-1 h-10 md:w-auto shadow-lg">Add New</Button>
      </SheetTrigger>

      <SheetContent className="bg-accent flex flex-col gap-4">

        <h1 className="mt-2 text-xl text-white">Add New Product</h1>

        <div className="h-px bg-background"></div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div
            className="mt-4 w-128 h-40 bg-background rounded-xl flex flex-col justify-center items-center border border-white border-dashed"
            onDragOver={(e) => e.preventDefault()} // Prevent default behavior to allow drop
            onDrop={handleDrop}>
            
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".jpg,.jpeg,.png" // validation without implementing zod //
              onChange={handleFileChange} // Handle file selection
            />

            <button
              type="button"
              onClick={handleBrowseClick}
              className="flex items-center space-x-2 p-2 text-white rounded">

              <ArrowUpIcon className="h-10 w-10" />

            </button>

            <p className="text-zinc-300 text-sm">
              Drag and drop or <span className="text-primary  underline cursor-pointer" onClick={handleBrowseClick}>browse</span> image here.
            </p>

            <p className="text-zinc-500 text-sm">Support: JPG, JPEG, PNG</p>

            {fileName && (
              <p className="m-2 text-zinc-300 text-sm">Selected file: {fileName}</p>
            )}

          </div>

          <Input
            type="text"
            placeholder="Product Title"
            {...register('productTitle')}
          />
          {errors.productTitle && <p className="text-red-500">{errors.productTitle.message}</p>}

          <Textarea
            placeholder="Description"
            {...register('description')}
          ></Textarea>

          {errors.description && <p className="text-red-500">{errors.description.message}</p>}

          <Button className="w-full" type="submit">Add</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}

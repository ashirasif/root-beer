import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowLeftIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";

import { formSchema } from "@/zod/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

  const onSubmit = (data: Inputs) => {
    console.log("Form Data:", data);
    console.log("Image Binary:", imageBinary); // Log the binary data of the image
    // Handle form submission (e.g., API call)
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full mt-1 h-10 md:w-auto shadow-lg">Add New</Button>
      </SheetTrigger>

      <SheetContent className="bg-background">
        <div className="flex flex-col gap-4">
          <Button size="icon">
            <ArrowLeftIcon />
          </Button>
        </div>

        <h1 className="mt-2 text-xl text-white">Add New Product</h1>
        <div className="border-b-slate-950 border-2"></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="mt-4 w-128 h-36 bg-zinc-700 rounded-xl flex flex-col justify-center items-center border border-white border-dashed"
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
              Drag and drop or <span className="text-red-400 underline cursor-pointer" onClick={handleBrowseClick}>browse</span> image here.
            </p>

            <p className="text-zinc-500 text-sm">Support: JPG, JPEG, PNG</p>

            {fileName && (
              <p className="mt-2 text-zinc-300 text-sm">Selected file: {fileName}</p>
            )}

          </div>

          <input
            type="text"
            placeholder="Product Title"
            className="mt-4 w-full h-10 bg-zinc-800 rounded-xl p-4 text-white"
            {...register('productTitle')}
          />
          {errors.productTitle && <p className="text-red-500">{errors.productTitle.message}</p>}

          <textarea
            placeholder="Description"
            className="mt-4 w-full h-28 bg-zinc-800 rounded-xl p-4 text-white resize-none overflow-y-hidden"
            {...register('description')}
          ></textarea>

          {errors.description && <p className="text-red-500">{errors.description.message}</p>}

          <div className="mt-1 flex flex-col gap-2">
            <Button type="submit" className="bg-red-500">Save</Button>
            <Button variant={"outline"} className="bg-background text-red-400 border-red-400 hover:text-white hover:bg-red-400">Cancel</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

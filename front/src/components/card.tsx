import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import ProductDetail from "./ProductDetail"

export function CardComponent(props: {
    title: string,
    subtitle: string,
    img: string,
    drinkID: number 
}) {
    return (
        <Card className="card-component">
            <CardHeader className="img-cont">
                <img src="https://s3-alpha-sig.figma.com/img/680a/140e/13f345b62212169fbfff6e6def69ba0e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gzdohP-mVrZbhBv77~kV6pTazu1Dkiq2NVdzTz8CSpEx~zCcHfCC0I9JTuCINpAjt0qdqjenE8hbvpzX0vAIaEvi~pKscaeKrV-2hpX4VBiuwCwzFDSPeWsoq8ylbdTHuoRxxSZEBWk3zSvZpExT9k6khbmOT2Kmu~UyanLRopMImefOLBhSwQ9kW1VguoWxk4mp~wgT-Xb3Q3OlbSZ7DF0YfTjtVlgH6cpSVrqvBRXjcBhnRRw~qFn~6uA1LL2Yku3TbmRGnvvoaXeLUggxsw6YfuGFq9m9ZNSAOF2vP6dpoKK5ohg0jcg4sTrFrUfGhmU6GK-~F44Rfb7vlIeqFA__" alt="" className="card-img" />
            </CardHeader>

            <CardContent className="card-desc">
                <CardTitle className="text-xl text-center text-foreground">{props.title}</CardTitle>
                <CardDescription className="card-subtitle">{props.subtitle}</CardDescription>
            </CardContent>

            <CardFooter>
                <ProductDetail id={props.drinkID} />
            </CardFooter>

        </Card>
    )

}


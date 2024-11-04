export type ProductType = {
    title: string;
    price: number;
    image: string;
    id: number;
}

export type DataContextType = {
    products: ProductType[];
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
    cart: CartType[];
    setCart: React.Dispatch<React.SetStateAction<CartType[]>>
}

export type CartType = {
    id: number
    title: string;
    price: number;
    quantity?: number
}

export type CustomButtonpropType = {
    background: string;
    label: string;
    handleClick: (id?: number) => any
}
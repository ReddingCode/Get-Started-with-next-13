

async function getProduct() {
    // getStaticProps
    const res = await fetch("https://product-app-101-server.vercel.app/api/products")
    return res.json()
}

export async function generateStaticParams() {
    const products = await getProduct()

    return products.map(product => ({
        slug: product.name.replace(/\s+/g, "-").tolowerCase()
    }))
    
}

export default function BlogDetailsPage({params}) {

    return (
        <div>
            <h1 className="page">Hi there Blog Detail page: {params.slug}</h1>
        </div>
    )
}
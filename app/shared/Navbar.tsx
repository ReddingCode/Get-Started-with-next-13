import Link from "next/link"


const links = [
    {name: "Home", path: "/"},
    {name: 'Blogs', path: "/blogs"},
    {name: "Products", path: "/products"},
    {name: "Shop", path: "/shop"},
    {name: "Dashboard", path: "/dashboard"},
]

export default function Navigation() {
    
    return (
        <div>
            {
                links.map(link => 
                    <Link key={link.name} href={link.path} >{link.name}{` `}</Link>
                    )
            }
        </div>
    )
}
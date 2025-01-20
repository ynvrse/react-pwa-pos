import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { loadDatabase } from '@/lib/database';
import { useEffect, useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    image?: string;
};

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = await loadDatabase();

            // Query data produk dari database
            const result = db.exec(`
                SELECT p.id, p.name, c.name as category, p.price, p.image
                FROM products p
                LEFT JOIN categories c ON p.category_id = c.id
            `);

            if (result[0]) {
                const rows = result[0].values.map((row) => ({
                    id: row[0] as number,
                    name: row[1] as string,
                    category: row[2] as string,
                    price: row[3] as number,
                    image: row[4] as string,
                }));
                setProducts(rows);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-4">
            {products.map((product) => (
                <Card key={product.id}>
                    {/* {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="mb-3 h-40 w-full rounded-lg object-cover"
                        />
                    ) : (
                        <div className="mb-3 flex h-40 w-full items-center justify-center rounded-lg bg-gray-200">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    )} */}
                    <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription className="flex items-center justify-between">
                            <p>Rp. {product.price}</p>
                            <p>{product.category}</p>
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}

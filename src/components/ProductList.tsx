import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { loadDatabase } from '@/lib/database';
import { Search } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    image?: string;
};

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProducts = useCallback(async (searchQuery: string) => {
        setLoading(true);
        try {
            const db = await loadDatabase();
            const searchCondition = searchQuery ? `WHERE p.name LIKE '%${searchQuery}%'` : '';
            const query = `
                SELECT p.id, p.name, c.name as category, p.price, p.image
                FROM products p
                LEFT JOIN categories c ON p.category_id = c.id
                ${searchCondition}
            `;
            const result = db.exec(query);

            if (result[0]) {
                const rows = result[0].values.map((row) => ({
                    id: row[0] as number,
                    name: row[1] as string,
                    category: row[2] as string,
                    price: row[3] as number,
                    image: row[4] as string,
                }));
                setProducts(rows);
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts(search);
    }, [search, fetchProducts]);

    return (
        <>
            <CardHeader>
                <CardTitle className="mb-2">Cari Barang: {search}</CardTitle>
                <CardDescription className="flex justify-between gap-2">
                    <Input
                        type="text"
                        placeholder="Cari Barang..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button variant={'secondary'} onClick={() => fetchProducts(search)}>
                        <Search />
                    </Button>
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
                {loading ? (
                    <p>Loading...</p>
                ) : products.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    products.map((product) => (
                        <Card key={product.id} className="w-full">
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription className="flex items-center justify-between">
                                    <p>Rp. {product.price}</p>
                                    <p>{product.category}</p>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                )}
            </CardContent>
        </>
    );
}

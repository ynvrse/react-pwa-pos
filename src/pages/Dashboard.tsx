import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Dashboard() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>List Barang</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle className="mb-2">Cari Barang</CardTitle>
                    <CardDescription className="flex gap-2">
                        <Input type="text" placeholder="Cari Barang.." />
                        <Button size="icon" variant={'secondary'}>
                            <Search />
                        </Button>
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <ProductList />
                </CardContent>
            </Card>
        </>
    );
}

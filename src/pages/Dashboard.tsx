import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import ProductList from '@/components/ProductList';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>List Barang</PageHeaderHeading>
            </PageHeader>
            <Card>
                <ProductList />
            </Card>
        </>
    );
}

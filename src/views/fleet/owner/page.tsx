import { useSearchParams } from 'react-router'
import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import CustomerListProvider from './_components/CustomerListProvider'
import CustomerListTable from './_components/CustomerListTable'
import CustomerListActionTools from './_components/CustomerListActionTools'
import CustomersListTableTools from './_components/CustomersListTableTools'
import CustomerListSelected from './_components/CustomerListSelected'

// Placeholder data — replace with your API call when ready
const MOCK_OWNERS: never[] = []

const OwnerPage = () => {
    const [searchParams] = useSearchParams()

    const pageIndex = parseInt(searchParams.get('pageIndex') ?? '1')
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10')

    return (
        <CustomerListProvider customerList={MOCK_OWNERS}>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Owner Master List</h3>
                            <CustomerListActionTools />
                        </div>
                        <CustomersListTableTools />
                        <CustomerListTable
                            customerListTotal={MOCK_OWNERS.length}
                            pageIndex={pageIndex}
                            pageSize={pageSize}
                        />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </CustomerListProvider>
    )
}

export default OwnerPage

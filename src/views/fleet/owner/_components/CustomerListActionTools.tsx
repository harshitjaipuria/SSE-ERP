import Button from '@/components/ui/Button'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router'
import { useCustomerListStore } from '../_store/customerListStore'

const CustomerListActionTools = () => {
    const navigate = useNavigate()

    const customerList = useCustomerListStore((state) => state.customerList)

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() =>
                    navigate('/fleet/owner/customer-create')
                }
            >
                Add new
            </Button>
        </div>
    )
}

export default CustomerListActionTools

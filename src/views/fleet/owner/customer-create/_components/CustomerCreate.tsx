import { useState } from 'react'
import { useNavigate } from 'react-router'
import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { Form, FormItem } from '@/components/ui/Form'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { TbTrash, TbArrowLeft } from 'react-icons/tb'
import sleep from '@/utils/sleep'

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Blocked', value: 'blocked' },
]

const validationSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    address: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    postcode: z.string().optional(),
    status: z.string().default('active'),
})

type OwnerFormSchema = z.infer<typeof validationSchema>

const OwnerCreate = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [discardConfirmationOpen, setDiscardConfirmationOpen] = useState(false)

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<OwnerFormSchema>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            city: '',
            country: '',
            postcode: '',
            status: 'active',
        },
        resolver: zodResolver(validationSchema),
    })

    const handleFormSubmit = async (values: OwnerFormSchema) => {
        console.log('New Owner:', values)
        setIsSubmitting(true)
        await sleep(800)
        setIsSubmitting(false)
        toast.push(
            <Notification type="success">Owner created successfully!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/fleet/owner')
    }

    const handleConfirmDiscard = () => {
        setDiscardConfirmationOpen(false)
        navigate('/fleet/owner')
    }

    return (
        <>
            <Container>
                <div className="flex items-center gap-2 mb-6">
                    <Button
                        size="sm"
                        variant="plain"
                        icon={<TbArrowLeft />}
                        onClick={() => navigate('/fleet/owner')}
                    >
                        Back to Owners
                    </Button>
                </div>

                <Form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="flex flex-col gap-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <h3>Add New Owner</h3>
                            <div className="flex items-center gap-3">
                                <Button
                                    type="button"
                                    icon={<TbTrash />}
                                    customColorClass={() =>
                                        'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                    }
                                    onClick={() => setDiscardConfirmationOpen(true)}
                                >
                                    Discard
                                </Button>
                                <Button
                                    variant="solid"
                                    type="submit"
                                    loading={isSubmitting}
                                >
                                    Create Owner
                                </Button>
                            </div>
                        </div>

                        {/* Personal Information */}
                        <AdaptiveCard>
                            <h5 className="mb-4">Personal Information</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormItem
                                    label="First Name"
                                    invalid={!!errors.firstName}
                                    errorMessage={errors.firstName?.message}
                                >
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter first name"
                                                autoComplete="off"
                                            />
                                        )}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Last Name"
                                    invalid={!!errors.lastName}
                                    errorMessage={errors.lastName?.message}
                                >
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter last name"
                                                autoComplete="off"
                                            />
                                        )}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Email"
                                    invalid={!!errors.email}
                                    errorMessage={errors.email?.message}
                                >
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="Enter email address"
                                                autoComplete="off"
                                            />
                                        )}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Phone Number"
                                    invalid={!!errors.phoneNumber}
                                    errorMessage={errors.phoneNumber?.message}
                                >
                                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter phone number"
                                                autoComplete="off"
                                            />
                                        )}
                                    />
                                </FormItem>

                                <FormItem label="Status">
                                    <Controller
                                        name="status"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                options={statusOptions}
                                                value={statusOptions.find(
                                                    (o) => o.value === field.value,
                                                )}
                                                onChange={(option) =>
                                                    field.onChange(option?.value)
                                                }
                                            />
                                        )}
                                    />
                                </FormItem>
                            </div>
                        </AdaptiveCard>

                        {/* Address Information */}
                        <AdaptiveCard>
                            <h5 className="mb-4">Address Information</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormItem label="Address" className="col-span-full">
                                    <Controller
                                        name="address"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter street address"
                                                autoComplete="off"
                                            />
                                        )}
                                    />
                                </FormItem>

                                <FormItem label="City">
                                    <Controller
                                        name="city"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter city"
                                                autoComplete="off"
                                            />
                                        )}
                                    />
                                </FormItem>

                                <FormItem label="Postcode">
                                    <Controller
                                        name="postcode"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter postcode"
                                                autoComplete="off"
                                            />
                                        )}
                                    />
                                </FormItem>

                                <FormItem label="Country">
                                    <Controller
                                        name="country"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Enter country"
                                                autoComplete="off"
                                            />
                                        )}
                                    />
                                </FormItem>
                            </div>
                        </AdaptiveCard>
                    </div>
                </Form>
            </Container>

            <ConfirmDialog
                isOpen={discardConfirmationOpen}
                type="danger"
                title="Discard changes"
                onClose={() => setDiscardConfirmationOpen(false)}
                onRequestClose={() => setDiscardConfirmationOpen(false)}
                onCancel={() => setDiscardConfirmationOpen(false)}
                onConfirm={handleConfirmDiscard}
            >
                <p>Are you sure you want to discard this? All unsaved changes will be lost.</p>
            </ConfirmDialog>
        </>
    )
}

export default OwnerCreate

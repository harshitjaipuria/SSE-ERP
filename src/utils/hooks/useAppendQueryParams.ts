import { useNavigate, useSearchParams } from 'react-router'

const useAppendQueryParams = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const onAppendQueryParams = (params: Record<string, string>) => {
        const newParams = new URLSearchParams(searchParams.toString())
        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                newParams.set(key, value)
            } else {
                newParams.delete(key)
            }
        })
        navigate(`?${newParams.toString()}`, { replace: true })
    }

    return { onAppendQueryParams }
}

export default useAppendQueryParams

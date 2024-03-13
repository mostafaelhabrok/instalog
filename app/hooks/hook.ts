import useSWR from 'swr'


function useEvent(url:string,live:boolean = false) {
    const fetcher = () => fetch(
        url
        , { cache: 'no-store' }).then(res => res.json())

    const { data, error, isLoading } = useSWR(url, fetcher, 
        live ? {
            refreshInterval: 1000 
        }: {});

    return {
        data,
        isLoading,
        error
      }
}

export default useEvent

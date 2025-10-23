const FeedLayout = ({ children }: LayoutProps<'/feed'>) => {

    return (

        <div className="w-48 aspect-square bg-amber-300 flex flex-col justify-center items-center">

            {children}
        </div>
    )
}

export default FeedLayout
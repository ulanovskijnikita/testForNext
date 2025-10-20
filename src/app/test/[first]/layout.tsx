export async function generateStaticParams() {
    
    return [
        {first: 'first-0'},
        {first: 'first-1'}, {first: 'first-2'}, {first: 'first-3'}, {first: 'first-4'}, {first: 'first-5'}, {first: 'first-6'},]
}

const Layout = ({ children }: LayoutProps<'/test/[first]'>) => children

export default Layout
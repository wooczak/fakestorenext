export default function CategoryPage({ params }: { params: { slug: string }}) {
    const categoryName = params.slug;

    return (
        <div>
            <p>{categoryName}</p>
        </div>
    )
}
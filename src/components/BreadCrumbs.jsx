export default function BreadCrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className='mb-4'>
      <ol className="flex items-center space-x-2 text-sm md:text-base font-sans">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.label} className="flex items-center">
              {isLast ? (
                <span 
                  className="text-[#585858] font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <a 
                    href={item.href} 
                    className="text-secondary hover:text-[#181818] transition-colors"
                  >
                    {item.label} &#62;
                  </a>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

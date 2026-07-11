import BreadCrumbs from './BreadCrumbs';

export default function Nav() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Course Details', href: '#' }, 
  ];

  return (
    <header className="w-full bg-nav px-6 py-2.5">
        <BreadCrumbs items={breadcrumbs} />
        <h1 className='text-primary text-3xl md:text-4xl font-bold py-1.5'>Starting SEO as your Home</h1>
    </header>
  );
}
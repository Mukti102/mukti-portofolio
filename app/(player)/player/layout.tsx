function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient h-screen dark:text-slate-100">{children}</div>
  );
}

export default Layout;

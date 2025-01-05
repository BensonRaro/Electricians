import Header from "@/components/navigation/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="pt-8 screen px-4">{children}</div>
    </div>
  );
};

export default Layout;

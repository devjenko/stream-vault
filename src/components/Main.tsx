const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main flex-col-reverse w-full items-center  md:justify-center md:flex-row md:items-start ">
      {children}
    </main>
  )
}

export default Main

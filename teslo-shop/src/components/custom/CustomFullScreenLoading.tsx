export const CustomFullScreenLoading = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <section className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-lg font-medium text-cyan-500 dark:text-white">
          Espere un momento, Cargando ...
        </p>
      </section>
    </main>
  );
};

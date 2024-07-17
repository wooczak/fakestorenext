export default function LoadingSkeleton() {
  return (
    <section className="flex flex-col animate-pulse gap-5 h-full sm:flex-row sm:flex-wrap w-full">
      <div className="p-4 border border-slate-200 rounded-lg flex flex-col gap-3 h-1/5 sm:basis-[calc((100%-2.5rem)/3)]">
        <div className="bg-slate-200 rounded-full aspect-square" />
        <div className="bg-slate-200 w-full h-10 rounded-full" />
        <div className="bg-slate-200 w-full h-10 rounded-full" />
      </div>
      <div className="p-4 border border-slate-200 rounded-lg flex flex-col gap-3 h-1/5 sm:basis-[calc((100%-2.5rem)/3)]">
        <div className="bg-slate-200 rounded-full aspect-square" />
        <div className="bg-slate-200 w-full h-10 rounded-full" />
        <div className="bg-slate-200 w-full h-10 rounded-full" />
      </div>
      <div className="p-4 border border-slate-200 rounded-lg flex flex-col gap-3 h-1/5 sm:basis-[calc((100%-2.5rem)/3)]">
        <div className="bg-slate-200 rounded-full aspect-square" />
        <div className="bg-slate-200 w-full h-10 rounded-full" />
        <div className="bg-slate-200 w-full h-10 rounded-full" />
      </div>
    </section>
  );
}

export default function LoadingSkeleton() {
    return (
      <section className="flex flex-col animate-pulse gap-5 h-full">
        <div className="p-4 border border-slate-200 rounded-lg flex flex-col gap-3 h-1/5">
          <div className="bg-slate-200 rounded-full h-10 w-10" />
          <div className="bg-slate-200 w-full h-2" />
          <div className="bg-slate-200 w-full h-2" />
        </div>
        <div className="p-4 border border-slate-200 rounded-lg flex flex-col gap-3 h-1/5">
          <div className="bg-slate-200 rounded-full  h-10 w-10" />
          <div className="bg-slate-200 w-full h-2" />
          <div className="bg-slate-200 w-full h-2" />
        </div>
        <div className="p-4 border border-slate-200 rounded-lg flex flex-col gap-3 h-1/5">
          <div className="bg-slate-200 rounded-full  h-10 w-10" />
          <div className="bg-slate-200 w-full h-2" />
          <div className="bg-slate-200 w-full h-2" />
        </div>
      </section>
    );
  }
  
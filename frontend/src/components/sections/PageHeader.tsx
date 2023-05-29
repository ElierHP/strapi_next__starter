import React from "react"

interface PageHeaderProps {
  data: {
    id: string
    title: string
    subtitle?: string
  }
}

export default function PageHeader({ data }: PageHeaderProps) {
  return (
    <div className="my-16 w-full text-center">
      {data?.subtitle && (
        <span className="text-emerald-400 font-bold">{data?.subtitle}</span>
      )}
      <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading">
        {data?.title}
      </h2>
    </div>
  )
}

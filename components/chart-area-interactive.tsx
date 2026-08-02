// 'use client'

// import * as React from 'react'
// import { Area, AreaChart, CartesianGrid, XAxis, Tooltip } from 'recharts'

// import { useIsMobile } from '@/hooks/use-mobile'
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   type ChartConfig,
// } from '@/components/ui/chart'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { getAdminChartData } from '@/app/(private)/dashboard/_actions/statsActions'

// interface ChartDataPoint {
//   date: string
//   bookings: number
//   revenue: number
// }

// const chartConfig = {
//   bookings: {
//     label: 'Bookings',
//     color: 'var(--primary)',
//   },
//   revenue: {
//     label: 'Revenue (₹)',
//     color: 'var(--accent)',
//   },
// } satisfies ChartConfig

// export function ChartAreaInteractive() {
//   const isMobile = useIsMobile()
//   const [timeRange, setTimeRange] = React.useState('90d')
//   const [chartData, setChartData] = React.useState<ChartDataPoint[]>([])
//   const [isLoading, setIsLoading] = React.useState(true)

//   React.useEffect(() => {
//     if (isMobile) {
//       setTimeRange('7d')
//     }
//   }, [isMobile])

//   React.useEffect(() => {
//     const fetchChartData = async () => {
//       setIsLoading(true)
//       try {
//         const result = await getAdminChartData(timeRange)
//         if (result.success && result.data) {
//           setChartData(result.data)
//         } else {
//           setChartData([])
//         }
//       } catch (error) {
//         console.error('[v0] Error fetching chart data:', error)
//         setChartData([])
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchChartData()
//   }, [timeRange])



//   return (
//     <Card className="@container/card">
//       <CardHeader>
//         <CardTitle>Bookings & Revenue Trend</CardTitle>
//         <CardAction>
//           <Select value={timeRange} onValueChange={setTimeRange}>
//             <SelectTrigger
//               className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
//               size="sm"
//               aria-label="Select a value"
//             >
//               <SelectValue placeholder="Last 3 months" />
//             </SelectTrigger>
//             <SelectContent className="rounded-xl">
//               <SelectItem value="90d" className="rounded-lg">
//                 Last 3 months
//               </SelectItem>
//               <SelectItem value="30d" className="rounded-lg">
//                 Last 30 days
//               </SelectItem>
//               <SelectItem value="7d" className="rounded-lg">
//                 Last 7 days
//               </SelectItem>
//             </SelectContent>
//           </Select>
//         </CardAction>
//       </CardHeader>
//       <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
//         {isLoading ? (
//           <div className="flex h-62.5 items-center justify-center text-muted-foreground">
//             Loading chart data...
//           </div>
//         ) : chartData.length === 0 ? (
//           <div className="flex h-62.5 items-center justify-center text-muted-foreground">
//             No data available for this period
//           </div>
//         ) : (
//           <ChartContainer
//             config={chartConfig}
//             className="aspect-auto h-62.5 w-full"
//           >
//             <AreaChart data={chartData}>
//               <defs>
//                 <linearGradient id="fillBookings" x1="0" y1="0" x2="0" y2="1">
//                   <stop
//                     offset="5%"
//                     stopColor="var(--color-bookings)"
//                     stopOpacity={1.0}
//                   />
//                   <stop
//                     offset="95%"
//                     stopColor="var(--color-bookings)"
//                     stopOpacity={0.1}
//                   />
//                 </linearGradient>
//                 <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
//                   <stop
//                     offset="5%"
//                     stopColor="var(--color-revenue)"
//                     stopOpacity={0.8}
//                   />
//                   <stop
//                     offset="95%"
//                     stopColor="var(--color-revenue)"
//                     stopOpacity={0.1}
//                   />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid vertical={false} />
//               <XAxis
//                 dataKey="date"
//                 tickLine={false}
//                 axisLine={false}
//                 tickMargin={8}
//                 minTickGap={32}
//                 tickFormatter={(value) => {
//                   const date = new Date(value)
//                   return date.toLocaleDateString('en-US', {
//                     month: 'short',
//                     day: 'numeric',
//                   })
//                 }}
//               />
//               <ChartTooltip
//                 cursor={false}
//                 content={
//                   <ChartTooltipContent
//                     labelFormatter={(value) => {
//                       return new Date(value).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: 'numeric',
//                       })
//                     }}
//                     indicator="dot"
//                   />
//                 }
//               />
//               <Area
//                 dataKey="bookings"
//                 type="natural"
//                 fill="url(#fillBookings)"
//                 stroke="var(--color-bookings)"
//                 stackId="a"
//               />
//               <Area
//                 dataKey="revenue"
//                 type="natural"
//                 fill="url(#fillRevenue)"
//                 stroke="var(--color-revenue)"
//                 stackId="a"
//               />
//             </AreaChart>
//           </ChartContainer>
//         )}
//       </CardContent>
//     </Card>
//   )
// }

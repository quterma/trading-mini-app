import type { FC } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { usePriceData, useRealtimePrices } from '../model'

export const PriceChart: FC = () => {
  const { points: basePoints } = usePriceData()
  const { points, stats } = useRealtimePrices(basePoints)

  const chartData = points.map((point) => ({
    time: new Date(point.timestamp).toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    price: point.price,
  }))

  const currentPrice = !isNaN(stats.currentPrice) ? stats.currentPrice : 0
  const [integerPart, decimalPart] = currentPrice.toFixed(2).split('.')
  const formattedInteger = parseInt(integerPart).toLocaleString('en-US')
  const changePercent = !isNaN(stats.changePercent) ? stats.changePercent.toFixed(2) : '0.00'

  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex justify-between items-center px-[12px]">
        <div className="flex items-center gap-[8px] font-[Geist]">
          <div className="text-[30px] font-normal leading-none font-[400]">
            <span className="text-[#ffffff]">{formattedInteger}</span>
            <span className="text-[#ffffff80]">.{decimalPart}</span>
          </div>
          <div className="text-[18px] font-normal text-right text-[#97fca6e6]">
            {Number(changePercent) >= 0 ? '+' : ''}
            {changePercent}%
          </div>
        </div>
        <div className="flex gap-[8px]">
          <button className="bg-[#222222ff] w-[39px] h-[36px] rounded-[8px] flex items-center justify-center border-[0] cursor-pointer outline-none focus:outline-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5998 7.16002C17.5722 5.285 16.5106 3.43849 14.8773 2.67743C14.0474 2.29065 13.0848 2.19432 12.0809 2.51296C11.2448 2.77836 10.4074 3.32229 9.59997 4.17749C8.79249 3.32229 7.95511 2.77836 7.119 2.51296C6.11517 2.19432 5.15258 2.29065 4.32255 2.67743C2.68933 3.43849 1.62782 5.285 1.6001 7.16002L1.60004 7.16878C1.60004 9.90355 3.22644 12.3264 4.94891 14.0269C5.81839 14.8852 6.73619 15.5839 7.53679 16.0717C7.93684 16.3153 8.3156 16.5114 8.65119 16.6483C8.97178 16.7791 9.30626 16.8785 9.59997 16.8785C9.89368 16.8785 10.2282 16.7791 10.5487 16.6483C10.8843 16.5114 11.2631 16.3153 11.6631 16.0717C12.4638 15.5839 13.3815 14.8852 14.2511 14.0269C15.9735 12.3264 17.5999 9.90355 17.5999 7.16878L17.5998 7.16002Z"
                fill="white"
                fillOpacity="0.3"
              />
            </svg>
          </button>
          <button className="bg-[#222222ff] w-[39px] h-[36px] rounded-[8px] flex items-center justify-center border-[0] cursor-pointer outline-none focus:outline-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.13667 1.59999H10.0659C10.4135 1.6007 10.7529 1.70597 11.0399 1.90212C11.327 2.09826 11.5484 2.37621 11.6753 2.69984L12.1008 3.78073L13.3927 4.52621L14.5376 4.35199C14.8819 4.30013 15.2339 4.35325 15.5477 4.50441C15.8614 4.65557 16.1223 4.89776 16.2964 5.1994L16.7598 6.00058C16.9343 6.30211 17.0138 6.6493 16.9878 6.99674C16.9618 7.34418 16.8315 7.67567 16.614 7.94784L15.891 8.85214V10.3478L16.6093 11.2521C16.8262 11.5246 16.9561 11.856 16.9821 12.2033C17.0081 12.5506 16.929 12.8977 16.755 13.1994L16.2928 14.0006C16.1186 14.3021 15.8577 14.5442 15.544 14.6953C15.2303 14.8465 14.8784 14.8997 14.534 14.848L13.3879 14.6738L12.0949 15.4204L11.6718 16.499C11.545 16.8228 11.3237 17.101 11.0366 17.2974C10.7496 17.4937 10.4101 17.5992 10.0623 17.6H9.1343C8.78651 17.5992 8.44701 17.4937 8.15997 17.2974C7.87292 17.101 7.65161 16.8228 7.52481 16.499L7.1017 15.4204L5.80867 14.6738L4.66259 14.848C4.31835 14.9 3.96643 14.847 3.6527 14.6961C3.33898 14.5451 3.078 14.3032 2.90378 14.0018L2.44156 13.1994C2.26699 12.8979 2.18751 12.5507 2.21352 12.2032C2.23953 11.8558 2.36982 11.5243 2.58733 11.2521L3.3103 10.3478V8.85214L2.58733 7.94784C2.36994 7.67565 2.23963 7.34425 2.21341 6.99689C2.18719 6.64952 2.26629 6.30232 2.44037 6.00058L2.90259 5.1994C3.07672 4.89755 3.33782 4.65522 3.6518 4.50405C3.96577 4.35287 4.31804 4.29988 4.66259 4.35199L5.80511 4.52621L7.1017 3.77481L7.52718 2.69984C7.65389 2.37602 7.87522 2.09789 8.16231 1.90171C8.4494 1.70552 8.78894 1.60038 9.13667 1.59999ZM11.9657 9.59999C11.9657 11.1135 11.1136 11.9656 9.60007 11.9656C8.08659 11.9656 7.23444 11.1135 7.23444 9.59999C7.23444 8.08651 8.08659 7.23436 9.60007 7.23436C11.1136 7.23436 11.9657 8.08651 11.9657 9.59999Z"
                fill="white"
                fillOpacity="0.3"
              />
            </svg>
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(236, 189, 117, 0.1)" />
              <stop offset="88.3%" stopColor="rgba(236, 189, 117, 0)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            tick={{ fontSize: 10, fontFamily: 'Roboto', fontWeight: 400 }}
            interval="preserveStartEnd"
            minTickGap={50}
          />
          <YAxis
            orientation="right"
            domain={['auto', 'auto']}
            tick={{ fontSize: 10, fontFamily: 'Roboto', fontWeight: 400 }}
            tickFormatter={(value) => value.toFixed(2)}
          />
          <Tooltip
            formatter={(value: number) => [value.toFixed(2)]}
            labelFormatter={() => ''}
            contentStyle={{
              backgroundColor: '#97fca6',
              border: 'none',
              borderRadius: '4px',
              padding: '1px 8px',
              fontFamily: 'Roboto',
              fontSize: '10px',
              fontWeight: 400,
              lineHeight: '150%',
              color: '#212121',
            }}
            itemStyle={{
              paddingLeft: 0,
              color: 'rgba(33, 33, 33, 1)',
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="rgba(236, 189, 117, 1)"
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

import React from 'react'
import { Col, Row } from 'antd'
import { withTranslation } from 'react-i18next'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import Title from '../../components/Title'
import Card from './card'
import { formatNumber } from '../../utils/helpers'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const dataPie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const DashboardPage = ({ t }) => (
  <>
    <Title name={t('dashboard')} />
    <Row gutter={24} className="color-white mt-4">
      <Card
        title="Orders Received"
        subTitle="Completed Orders"
        iconName="mdiAccountGroup"
        bgClassname="bg-green-gradient"
        value={formatNumber(4200)}
        subValue={formatNumber(200)}
      />
      <Card
        title="Total Sales"
        subTitle="This Month"
        iconName="mdiCartOutline"
        bgClassname="bg-orange-gradient"
        value={`$${formatNumber(1800)}`}
        subValue={`$${formatNumber(700)}`}
      />
      <Card
        title="Revenue"
        subTitle="This Month"
        iconName="mdiCashMultiple"
        bgClassname="bg-red-gradient"
        value={`$${formatNumber(1800)}`}
        subValue={`$${formatNumber(700)}`}
      />
      <Card
        title="Total Profit"
        subTitle="This Month"
        iconName="mdiSealVariant"
        bgClassname="bg-blue-gradient"
        value={`$${formatNumber(1800)}`}
        subValue={`$${formatNumber(700)}`}
      />

      <Col lg={16} style={{ height: 400 }}>
        <ResponsiveContainer className="w-full h-full bg-white">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Col>
      <Col lg={8}>
        <ResponsiveContainer className="w-full h-full bg-white">
          <PieChart>
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  </>
)

export default withTranslation()(DashboardPage)

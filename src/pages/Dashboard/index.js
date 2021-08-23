import React from 'react'
import { PageHeader, Row } from 'antd'
import { withTranslation } from 'react-i18next'
import Title from '../../components/Title'
import Card from './card'
import { formatNumber } from '../../utils/helpers'

const DashboardPage = ({ t }) => (
  <>
    <Title name={t('dashboard')} />
    <PageHeader title={t('dashboard')} />
    <Row gutter={24} className="color-white">
      <Card
        title="Orders Received"
        subTitle="Completed Orders"
        iconName="mdiAccountGroup"
        bgClassname="bg-success-gradient"
        value={formatNumber(4200)}
        subValue={formatNumber(200)}
      />
      <Card
        title="Total Sales"
        subTitle="This Month"
        iconName="mdiCartOutline"
        bgClassname="bg-warning-gradient"
        value={`$${formatNumber(1800)}`}
        subValue={`$${formatNumber(700)}`}
      />
      <Card
        title="Revenue"
        subTitle="This Month"
        iconName="mdiCashMultiple"
        bgClassname="bg-danger-gradient"
        value={`$${formatNumber(1800)}`}
        subValue={`$${formatNumber(700)}`}
      />
      <Card
        title="Total Profit"
        subTitle="This Month"
        iconName="mdiSealVariant"
        bgClassname="bg-primary-gradient"
        value={`$${formatNumber(1800)}`}
        subValue={`$${formatNumber(700)}`}
      />
    </Row>
  </>
)

export default withTranslation()(DashboardPage)

import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withTranslation } from 'react-i18next'
import { getAccessToken } from '../../utils/helpers'
import * as authSelectors from '../../store/modules/auth/selectors'
import LoadingModal from '../../components/Modal/loading'
import Title from '../../components/Title'

const UnauthorizedPage = ({ authUser, t }) => (
  (getAccessToken() && !authUser) ? (
    <>
      <Title name={t('loading')} />
      <LoadingModal visiable />
    </>
  ) : (
    <>
      <Title name={t('not_found')} />
      <Result
        status="404"
        title="404"
        subTitle={t('not_found')}
        extra={(
          <Link to="/">
            <Button type="primary">{t('back_home')}</Button>
          </Link>
        )}
      />
    </>
  )
)
const mapStateToProps = createStructuredSelector({
  authUser: authSelectors.user(),
})

export default withTranslation()(
  connect(
    mapStateToProps,
  )(UnauthorizedPage),
)

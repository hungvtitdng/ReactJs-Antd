import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { trans } from '../../i18n'
import { getAccessToken } from '../../utils/helpers'
import * as authSelectors from '../../store/modules/auth/selectors'
import LoadingModal from '../../components/Modal/loading'
import Title from '../../components/Title'

const UnauthorizedPage = ({ authUser }) => (
  (getAccessToken() && !authUser) ? (
    <>
      <Title name={trans('loading')} />
      <LoadingModal visiable />
    </>
  ) : (
    <>
      <Title name={trans('not_found')} />
      <Result
        status="404"
        title="404"
        subTitle={trans('not_found')}
        extra={(
          <Link to="/">
            <Button type="primary">{trans('back_home')}</Button>
          </Link>
        )}
      />
    </>
  )
)
const mapStateToProps = createStructuredSelector({
  authUser: authSelectors.user(),
})

export default connect(
  mapStateToProps,
)(UnauthorizedPage)

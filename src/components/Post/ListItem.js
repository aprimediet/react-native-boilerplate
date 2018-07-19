import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Card, CardContent, CardCover, Title } from 'react-native-paper'

// const ListItem = ({ title, content }) => (
//   <Card style={styles.container}>
//     <CardCover source={{ uri: 'https://loremflickr.com/320/240' }} />
//     <CardContent>
//       <Title>{title}</Title>
//     </CardContent>
//   </Card>
// )

// ListItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// }

class ListItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // content: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  handlePress = () => {
    const { navigation } = this.props

    console.log('Pressed')

    navigation.navigate('PostDetail')
  }

  render() {
    const { title } = this.props
    return (
      <Card style={styles.container} onPress={this.handlePress}>
        <CardCover source={{ uri: 'https://loremflickr.com/320/240' }} />
        <CardContent>
          <Title>{title}</Title>
        </CardContent>
      </Card>
    )
  }
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 12,
  }
})

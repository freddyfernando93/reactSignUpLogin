import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import UserItem from '../components/UserItem';


export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      users: [],
      isFetching: false,
      isPaging: false,
      nextPage: null
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  onRefresh() {
    this.setState({ isFetching: true }, function() { this.loadUsers() });
  }

  async loadUsers() {
    let url = 'https://reqres.in/api/users';
    fetch(url, {
      method: 'GET',

    }).then(
        response => response.json())
        .then(async responseJson => {
          if(__DEV__) {
            console.log(responseJson);
          }
          this.setState({
            users: responseJson.data,
            nextPage: responseJson.page === responseJson.total_pages ? undefined : responseJson.page + 1,
            isFetching: false
          });
        }).catch(error => {
          if(__DEV__) {
            console.log(error);
          }
          this.setState({ isFetching: false });
        })
  }

  async loadMoreUsers() {
      const {nextPage, isPaging} = this.state;
      if(nextPage && !isPaging) {
          this.setState({ isPaging: true });
          const url = `https://reqres.in/api/users?page=${this.state.nextPage}`;
            fetch(url, {
              method: 'GET',
            }).then(
            response => response.json())
            .then(async responseJson => {
              if(__DEV__) {
                console.log(responseJson);
              }
              this.setState({
                  users: this.state.users.concat(responseJson.data),
                  nextPage: responseJson.page === responseJson.total_pages ? undefined : responseJson.page + 1,
                  isPaging: false
              });
            }).catch(error => {
              if(__DEV__) {
                console.log(error);
              }
              this.setState({ isPaging: false });
            })
      }
  }

  render() {
    if(this.state.users && this.state.users.length > 0) {
      return (
          <View style={styles.container}>
            <FlatList
                keyExtractor = { (item, index) => index.toString() }
                contentContainerStyle={styles.contentContainer}
                onRefresh={() => this.onRefresh()}
                refreshing={this.state.isFetching}
                data={this.state.users}
                onEndReached={() => this.loadMoreUsers()}
                onEndReachedThreshold={1}
                renderItem={(item) => <UserItem user={item.item}/>}
            />
          </View>
      );
    } else return null;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15,
    paddingHorizontal: 20
  },
});

import React, { Component } from 'react';
import { Alert, StyleSheet, ImageBackground, Text, KeyboardAvoidingView, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import InputField from '../components/InputField';


export default class SignUpScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      job: ''
    };
    this.createUser = this.createUser.bind(this);
  }

  createUser() {
    this.setState({
      uploading: true,
    });
    const {firstName, lastName, email, job} = this.state;
    const url = 'https://reqres.in/api/users/';
    let requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        name: firstName,
        lastName,
        email,
        job
      }),
    };
    fetch(url, requestOptions).then(
        response => response.json())
        .then(async responseJson => {
          this.setState({firstName: '', lastName: '', email: '', job: '', uploading: false});
          Alert.alert('User Created', 'The user has been successfully created.', [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: true });
        }).catch(error => {
          this.setState({ uploading: false });
          Alert.alert('User Create Error', error, [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: true });
        })
  }

  setText(text, input) {
    this.setState({
      ...this.state,
      [input]: text
    })
  }

  validateEmail = (text, input) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      this.setState({
        ...this.state,
        [input]: text
      });
      return false;
    }
    else {
      this.setState({
        ...this.state,
        [input]: text
      });
      console.log("Email is Correct");
    }
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
          <ImageBackground source={require('../assets/login_background.jpg')} style={styles.imageBg}>

            <ScrollView contentContainerStyle={styles.contentContainer}>
              <View style={styles.getStartedContainer}>
                <View>
                  <Text style={styles.titleText}>
                    REGISTER
                  </Text><Text style={styles.subTitleText}>
                    You and Your Friends always Connected
                  </Text>
                </View>

                <InputField
                    iconName={'user'}
                    color={this.state.emailFocus ? Colors.tintColor : 'rgba(0,0,0,0.4)'}
                    placeholder={'Email'}
                    onFocus={() => this.setState({emailFocus: true})}
                    onBlur={() => this.setState({emailFocus: false})}
                    onChangeText={text => this.validateEmail(text, 'email')}
                    defaultValue={this.state.email}
                />
                <InputField
                    iconName={'user'}
                    color={this.state.emailFocus ? Colors.tintColor : 'rgba(0,0,0,0.4)'}
                    placeholder={'Password'}
                    secureTextEntry
                    onFocus={() => this.setState({emailFocus: true})}
                    onBlur={() => this.setState({emailFocus: false})}
                    onChangeText={text => this.validateEmail(text, 'email')}
                    defaultValue={this.state.email}
                />
                <InputField
                    iconName={'user'}
                    color={this.state.emailFocus ? Colors.tintColor : 'rgba(0,0,0,0.4)'}
                    placeholder={'Confirm Password'}
                    secureTextEntry
                    onFocus={() => this.setState({emailFocus: true})}
                    onBlur={() => this.setState({emailFocus: false})}
                    onChangeText={text => this.validateEmail(text, 'email')}
                    defaultValue={this.state.email}
                />

                {this.state.uploading ?
                    <ActivityIndicator style={{ paddingVertical: 10 }} color={Colors.tintColor}/>
                    :
                    <TouchableOpacity
                        disabled={this.state.email.length === 0}
                        style={styles.createUserButton}
                        onPress={this.createUser}
                    >
                      <ImageBackground
                          style={{ width: 50, height: 50, borderRadius: 25 }}
                          imageStyle={{ borderRadius: 25 }}
                          source={require('../assets/login_background.jpg')} style={styles.buttonBg}>
                      <Text style={styles.createUserText}>Sign Up</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                }
              </View>
            </ScrollView>
          </ImageBackground>
        </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonBg: {
    // flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10
  },
  createUserButton: {
    width: '70%',
    borderRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 12,
    shadowOpacity: 1

  },
  createUserText: {
    color: '#fff',
    fontSize: 20,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleText: {
    color: 'white',
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 20,
    flexGrow: 1,
  },
  getStartedContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: '15%',
  },

});

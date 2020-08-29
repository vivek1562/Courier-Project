import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Button} from 'react-native';
import { Header } from "react-native-elements";
 
export default class DeliveryBoyList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[]
     };
   }
   
   renderItem = ({item}) => (
     <TouchableOpacity style={styles.listWrapper}>
       <Text style={styles.row}>
          {item.firstName} {item.lastName}
       </Text>
       <Text style={styles.row}>
          {item.address.street}, {item.address.landmark}, {item.address.city}, {item.address.zipcode}
       </Text>
       <Text style={styles.row}>
          {item.address.coord[0]}, {item.address.coord[1]}
       </Text>
       <Text style={styles.row}>
          {item.phone}
       </Text>
     </TouchableOpacity>
   );

   renderSeparator = () => {
     return (
       <View
          style={{height: 1, width: '100%', backgroundColor: 'black'}}>
       </View>
     )
   }

  componentDidMount(){
    fetch("http://192.168.29.28:8080/deliveryBoy")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) 
    }
 
    render(){
      if(this.state.isLoading){
        return(
          <View style={styles.container}>
            <Header
                leftComponent={{ icon: "menu", color: "#fff" }}
                centerComponent={{ text: "Delivery Boy List", style: { color: "#fff" } }}
                rightComponent={{ icon: "home", color: "#fff" }}
            /> 
            <View style={{flex: 1}}>
              <ActivityIndicator style={{justifyContent: "center"}} size="large" animating />
            </View>
          </View>
        )
      }else{
        return(
          <View style={styles.container}>
              <Header
                leftComponent={{ icon: "menu", color: "#fff" }}
                centerComponent={{ text: "Delivery Boy List", style: { color: "#fff" } }}
                rightComponent={{ icon: "home", color: "#fff" }}
              /> 
              <TouchableOpacity style={[styles.listWrapper,{borderBottomWidth: 0.5, paddingBottom: 3}]} >
                <Text style={styles.tableHeader}>Name</Text>
                <Text style={styles.tableHeader}>Address</Text>
                <Text style={styles.tableHeader}>Co-ord</Text>
                <Text style={styles.tableHeader}>Phone</Text>
              </TouchableOpacity>
              <View style={{flex: 1}}>
                <View style={{flex: 0.95}}>
                  <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index)=>index}
                    ItemSeparatorComponent={this.renderSeparator}
                  />
                </View>
                <View style={{flex: 0.05,  justifyContent: "flex-end"}}>
                  <Button title="Add Delivery Boy"/>
                </View>
              </View>
          </View>
        );
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listWrapper: {
    flexDirection: "row", 
    margin: 6
  },

  row: {
    flex: 1,
    fontSize: 15,
    marginHorizontal:4
  },

  tableHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold"
  }

})
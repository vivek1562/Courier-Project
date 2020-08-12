import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  /*titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },*/
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 4,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
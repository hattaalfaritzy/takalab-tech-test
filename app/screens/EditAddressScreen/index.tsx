import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {useForm, Controller, useFieldArray} from 'react-hook-form';
import styles from './styles';
import Header from 'app/components/Header';
import rnStyles from '../../../styles.json';
import {create} from 'tailwind-rn';
import {useStore} from 'app/store';

const {tailwind} = create(rnStyles);

const EditAddressScreen: React.FC<any> = (props) => {
  const {userAddress, setUserAddress} = useStore((state) => {
    return {
      userAddress: state.userAddress,
      setUserAddress: state.setUserAddress,
    };
  });

  const {control, handleSubmit} = useForm({
    mode: 'onBlur',
    defaultValues: {items: userAddress},
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'items',
  });

  const onNext = () =>
    props.navigation.navigate('Home', {screen: 'Edit Profile Screen'});

  const onSubmit = (data: any) => {
    setUserAddress(data.items);
    onNext();
  };
  return (
    <SafeAreaView style={tailwind('flex-1 bg-white flex flex-col')}>
      <Header
        label={false}
        title={'Edit Address'}
        cartIcon={false}
        navigation={props.navigation}
        withBack={true}
      />
      <ScrollView style={tailwind('flex-1 bg-white')}>
        <FlatList
          data={fields}
          renderItem={({item, index}) => (
            <View
              style={[
                tailwind('flex-1 flex-col bg-white mx-6 my-6'),
                styles.shadow,
              ]}>
              <View style={tailwind('flex-1 flex-col px-3 pt-3')}>
                <Text
                  style={[
                    tailwind('text-sm text-left text-black'),
                    styles.medium,
                  ]}>
                  Name Address
                </Text>
                <Controller
                  control={control}
                  name={`items.${index}.name`}
                  render={({field: {onChange, value, onBlur}}) => (
                    <TextInput
                      style={[
                        tailwind('w-full border-b border-primary'),
                        styles.medium,
                      ]}
                      placeholder="Input your name address"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                    />
                  )}
                />
              </View>
              <View style={tailwind('flex-1 flex-col p-3')}>
                <Text
                  style={[
                    tailwind('text-sm text-left text-black'),
                    styles.medium,
                  ]}>
                  Detail Address
                </Text>
                <Controller
                  control={control}
                  name={`items.${index}.detail`}
                  render={({field: {onChange, value, onBlur}}) => (
                    <TextInput
                      style={[
                        tailwind('w-full border-b border-primary'),
                        styles.medium,
                      ]}
                      placeholder="Input your detail address"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                    />
                  )}
                />
              </View>
              <View style={tailwind('flex p-3')}>
                <TouchableOpacity
                  style={tailwind(
                    'flex flex-row items-center justify-center px-3 py-4 rounded-full bg-red-700',
                  )}
                  onPress={() => {
                    remove(index);
                    handleSubmit((data: any) => setUserAddress(data.items))();
                  }}>
                  <Text
                    style={[
                      tailwind('text-sm text-center text-white'),
                      styles.semiBold,
                    ]}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View style={tailwind('flex px-6 pb-6')}>
          <TouchableOpacity
            style={tailwind(
              'flex flex-row items-center justify-center px-3 py-4 rounded-full border-2 border-primary',
            )}
            onPress={() => {
              append({name: '', detail: ''});
            }}>
            <Text
              style={[
                tailwind('text-sm text-center text-current'),
                styles.semiBold,
              ]}>
              Add new address
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={[tailwind('flex flex-col px-6 py-3 bg-white'), styles.shadow]}>
        <TouchableOpacity
          style={tailwind(
            'flex flex-row items-center justify-center px-3 py-4 rounded-full bg-primary',
          )}
          onPress={handleSubmit(onSubmit)}>
          <Text
            style={[
              tailwind('text-sm text-center text-white'),
              styles.semiBold,
            ]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditAddressScreen;

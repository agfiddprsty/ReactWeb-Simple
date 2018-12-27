import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { Registrasi } from './Registrasi';
import Registrasi from './Registrasi';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import serializer from 'ngx-jest-snapshot-serializer';
import {snapshotSerializer} from 'enzyme-to-json';

describe('Registrasi Component', () => {
  it('renders without crashing', () => {
    expect(shallow(<Registrasi />).exists(<form className='Registrasi'></form>)).toBe(true)
   })
  it('renders a Name', () => {
    expect(shallow(<Registrasi />).find('#name').length).toEqual(1)
   })
  it('renders a Email', () => {
    expect(shallow(<Registrasi />).find('#email').length).toEqual(1)
   })
   it('renders a Password', () => {
    expect(shallow(<Registrasi />).find('#password').length).toEqual(1)
   })
   it('renders a Alamat', () => {
    expect(shallow(<Registrasi />).find('#alamat').length).toEqual(1)
   })
   it('renders a Usia', () => {
    expect(shallow(<Registrasi />).find('#usia').length).toEqual(1)
   })
   it('renders a Skils', () => {
    expect(shallow(<Registrasi />).find('#skils').length).toEqual(1)
   })
   it('renders a Asal Sekolah', () => {
    expect(shallow(<Registrasi />).find('#asal').length).toEqual(1)
   })
   
   expect.addSnapshotSerializer(Serializer);

   describe('Name input', () => {
  
    it('should respond to change event and change the state of the Name Component', () => {
     const wrapper = shallow(<Registrasi />)
     wrapper.find('#name').simulate('change', {target: {name: 'name', value: 'contoh'}})
     expect(wrapper.state('name')).toEqual('contoh')
    })
   })

   describe('Email input', () => {
  
    it('should respond to change event and change the state of the Email Component', () => {
     const wrapper = shallow(<Registrasi />)
     wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}})
     expect(wrapper.state('email')).toEqual('blah@gmail.com')
    })
   })
 
   describe('Password input', () => {
  
    it('should respond to change event and change the state of the Password Component', () => {
     const wrapper = shallow(<Registrasi />)
     wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}})
     expect(wrapper.state('password')).toEqual('cats')
    })
   })

   describe('Alamat input', () => {
  
    it('should respond to change event and change the state of the Alamat Component', () => {
     const wrapper = shallow(<Registrasi />)
     wrapper.find('#alamat').simulate('change', {target: {name: 'alamat', value: 'jakarta'}})
     expect(wrapper.state('email')).toEqual('jakarta')
    })
   })

   describe('No Handphone input', () => {
  
    it('should respond to change event and change the state of the No Handphone Component', () => {
     const wrapper = shallow(<Registrasi />)
     wrapper.find('#nohp').simulate('change', {target: {name: 'nohp', value: '12345'}})
     expect(wrapper.state('nohp')).toEqual('12345')
    })
   })

   describe('Usia input', () => {
  
    it('should respond to change event and change the state of the Usia Component', () => {
     const wrapper = shallow(<Registrasi />)
     wrapper.find('#usia').simulate('change', {target: {name: 'usia', value: '16'}})
     expect(wrapper.state('usia')).toEqual('16')
    })
   })

   describe('Skils input', () => {
  
    it('should respond to change event and change the state of the Skils Component', () => {
     const wrapper = shallow(<Registrasi />)
     wrapper.find('#skils').simulate('change', {target: {name: 'skils', value: 'Android dev'}})
     expect(wrapper.state('skils')).toEqual('Android dev')1
    })
   })

   describe('Asal Sekolah input', () => {
  
    it('should respond to change event and change the state of the Asal Sekolah Component', () => {
     const wrapper = shallow(<Registrasi />)
     wrapper.find('#asal').simulate('change', {target: {name: 'asal', value: 'jakarta'}})
     expect(wrapper.state('asal')).toEqual('jakarta')
    })
   })

   it('renders correctly', () => {
    const tree = renderer.create(
      <Registrasi />
    ).toJson();
    expect(tree).toMatchSnapshot();x  
  });
})
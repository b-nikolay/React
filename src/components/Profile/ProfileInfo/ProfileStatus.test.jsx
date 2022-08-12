import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('Component', () => {
  test('should status be in the state', () => {
    const component = create(<ProfileStatus status={'status'}/>);
    const instance = component.getInstance()
    expect(instance.state.status).toBe('status')
  });
  test('after creation span should be display',  () => {
    const component = create(<ProfileStatus status={'status'}/>);
    const root = component.root;
    let span =  root.findByType('span');
    expect(span).not.toBeNull();
  });
  test('after creation input should be display',  () => {
    const component = create(<ProfileStatus status={'status'}/>);
    const root = component.root;

    expect(() => {
      let input =  root.findByType('input');
    }).toThrow();
  });
  test('input should be display in edit mode instead of span',  () => {
    const component = create(<ProfileStatus status={'status'}/>);
    const root = component.root;
    let span =  root.findByType('span');
    span.props.onDoubleClick()
    let input =  root.findByType('input');
  
    expect(input.props.value).toBe('status');
  });
  test('callback should be called',  () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status={'status'} updateStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  test('after creation span should be display',  () => {
    const component = create(<ProfileStatus status={'status'}/>);
    const root = component.root;
    let span =  root.findByType('span');
    expect(span.children[0]).toBe('status');
  });
});


// const ReactTestRenderer = require('react-test-renderer');

// const renderer = ReactTestRenderer.create(
//   <ProfileStatus status={'status'}/>
// );

// console.log(renderer.toJSON());
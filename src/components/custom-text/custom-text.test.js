import React from 'react'
import{render,unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import CustomText from './custom.text.component'


beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(()=>
  {
      unmountComponentAtNode(container)
      container.remove();
      container=null
  })
  it('renders with or without name',()=>
  {
      act(()=>{
          render(<CustomText>Pokemon</CustomText>,container)
      })
      expect(container.textContent).toBe('Pokemon')
  })
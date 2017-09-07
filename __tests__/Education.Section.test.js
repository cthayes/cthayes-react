jest.dontMock('../source/components/Education.Section.react');

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import Section from '../source/components/Education.Section.react'

describe('Education.Section component', function () {

  it('renders provided section text', function () {
	  
	let ed = {
		id: 0,
		date: '2016',
		degree: 'Degree',
		school: 'UMBC'
	}
  
  	let section = TestUtils.renderIntoDocument(
      <Section key={ed.id} date={ed.date} degree={ed.degree} school={ed.school} />
    );

    let sectionNode = ReactDOM.findDOMNode(section)    
    expect(sectionNode).toBeDefined();

	let degreeTextElements = sectionNode.getElementsByClassName('name')
	expect(degreeTextElements.length > 0)
	
	let degreeText = degreeTextElements[0].textContent
    expect(degreeText).toEqual('Degree');
  
  });
});
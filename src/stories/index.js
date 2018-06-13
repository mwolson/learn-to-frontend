import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import SetupMd from '../lessons/00-computer-setup.md'
import Lesson1Md from '../lessons/01-modify-sample-project.md'
import Lesson2Md from '../lessons/02-create-new-project.md'
import HomeworkMd from '../lessons/99-homework.md'

storiesOf('Setup', module)
  .add('Computer Setup', doc(SetupMd))

storiesOf('Lessons')
  .add('Lesson 1 - Modify a Sample Project', doc(Lesson1Md))
  .add('Lesson 2 - Create a New React Project', doc(Lesson2Md))

storiesOf('Homework')
  .add('Current homework', doc(HomeworkMd))

import React, { useEffect, useState } from 'react'
import { ScrollView, useWindowDimensions, View } from 'react-native'
import TaskItem from 'components/ tasks/item'
import { db } from '../../../firebase'
import { collection, query, getDocs, where } from 'firebase/firestore'
import useAuth from '../../hooks/use-auth'
import StyledText from 'components/common/styled-text'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../screens'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

type TaskTypes = 'weekly' | 'monthly'

type Task = {
  name: string
  finished: boolean
  type: TaskTypes
  duration: number
  startTime?: number
  stopTime?: number
}

type TaskScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'TaskScreen'
>

const TasksList = () => {
  const navigation = useNavigation<TaskScreenNavigationProps>()
  const { user } = useAuth()
  const [data, setData] = useState<Task[]>()
  const { width } = useWindowDimensions()

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, 'tasks'), where('userId', '==', user?.uid))
      const docSnap = await getDocs(q)
      if (docSnap) {
        const docs: Task[] = []
        docSnap.forEach((doc) => {
          console.log(doc.data())
          docs.push(doc.data() as Task)
        })
        setData(docs)
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }

    if (user) getData()
  }, [user])

  return (
    <View style={{ marginTop: 8 }}>
      <StyledText>Goals list</StyledText>
      <ScrollView
        contentContainerStyle={{
          marginTop: 8,
          width: width - 20,
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          alignSelf: 'stretch',
        }}
      >
        {data?.map((task, index) => (
          <TaskItem
            key={index}
            taskData={task}
            onPress={() => {
              navigation.navigate('TaskScreen')
            }}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default TasksList

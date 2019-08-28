'use strict'

const db = require('../server/db')
const {User, Goal} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'czandelacruzjavier@gmail.com', password: '718190'}),
    User.create({email: 'AzuResolute@gmail.com', password: '718190'}),
    User.create({email: 'Monarchwings@gmail.com', password: 'jojoS'})
  ])

  console.log(`seeded ${users.length} users`)

  const goals = await Promise.all([
      Goal.create({
        title: 'Freedom from NYCRN',
        message: 'You\'re almost there, Jan. Hold on baby ko...',
        startDate: new Date(2018, 10, 6),
        targetDate: new Date(2019, 9, 17),
        userId: 1
      }),
      Goal.create({
        title: 'Start at ITlize',
        message: 'Launch pad ready, set, GO!',
        targetDate: new Date(2019, 9, 17),
        userId: 2
      }),
      Goal.create({
        title: 'Hand in Resignation',
        message: 'The beginning of 4 weeks',
        startDate: new Date(2018, 10, 6),
        targetDate: new Date(2019, 8, 11),
        userId: 1,
        parentGoalId: 1
      }),
      Goal.create({
        title: 'Persona 5 Royal',
        message: 'ITS COMING OUT',
        startDate: Date.now(),
        targetDate: new Date(2020, 3, 1),
        userId: 3
      })
  ])

  console.log(`seeded ${goals.length} goals`)

  // const tasks = await Promise.all([
  //   Task.create({

  //   })
  // ])

  // console.log(`seeded ${tasks.length} goal-task relationships`)

  console.log(`seeded successfully`)

}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed

'use strict'

const db = require('../server/db')
const {User, Goal} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'czandelacruzjavier@gmail.com', password: '718190'}),
    User.create({email: 'azuresolute@gmail.com', password: '718190'}),
    User.create({email: 'monarchwings@gmail.com', password: 'jojo'})
  ])

  console.log(`seeded ${users.length} users`)

  const goals = await Promise.all([
      Goal.create({
        title: 'Freedom from NYCRN',
        message: 'You\'re almost there, Jan. Hold on baby ko...',
        startDate: new Date(2018, 10, 6),
        targetDate: new Date(2019, 9, 16),
        mainGoal: true,
        userId: 1
      }),
      Goal.create({
        title: 'Start at ITlize',
        message: 'Launch pad ready, set, GO!',
        targetDate: new Date(2019, 9, 17),
        mainGoal: true,
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
        startDate: new Date(2019, 7, 27),
        targetDate: new Date(2020, 3, 1),
        mainGoal: true,
        userId: 3
      }),
      Goal.create({
        title: 'Attain BS Nursing',
        message: 'Years of academic and physical hard work finally bears fruit',
        startDate: new Date(2015, 8, 30),
        targetDate: new Date(2020, 5, 30),
        userId: 1
      }),
      Goal.create({
        title: 'Trusted to be Charge Nurse',
        message: 'Yaaaaay!',
        startDate: new Date(2018, 10, 6),
        targetDate: new Date(2019, 3, 1),
        userId: 1,
        parentGoalId: 1
      }),
      Goal.create({
        title: 'Trusted to be Supervisor',
        message: 'Yaaaaay!',
        startDate: new Date(2018, 10, 6),
        targetDate: new Date(2019, 5, 1),
        userId: 1,
        parentGoalId: 1
      })
  ])

  console.log(`seeded ${goals.length} goals`)
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

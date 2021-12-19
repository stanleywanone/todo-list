/* eslint-disable @typescript-eslint/no-var-requires */
const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async (req, res): Promise<any> => {
  switch (req.method) {
    case 'GET': {
      try {
        const { db } = await connectToDatabase();
        const notes = await db.collection('todolist').find({}).toArray();

        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    }
    case 'POST': {
      try {
        // connect to the database
        const { db } = await connectToDatabase();
        // add the note
        await db.collection('todolist').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
          message: 'Note added successfully',
          success: true,
        });
      } catch (error) {
        // return an error
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    }
    case 'PUT': {
      try {
        // connect to the database
        const { db } = await connectToDatabase();

        // update the published status of the note
        await db.collection('todolist').updateOne(
          {
            _id: ObjectId(req.body._id),
          },
          {
            $set: {
              title: req.body.title,
              description: req.body.description,
              priority: req.body.priority,
              progress: req.body.progress,
            },
          }
        );

        // return a message
        return res.json({
          message: 'Note updated successfully',
          success: true,
        });
      } catch (error) {
        // return an error
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    }
    case 'DELETE': {
      try {
        // Connecting to the database
        const { db } = await connectToDatabase();

        // Deleting the note
        await db.collection('todolist').deleteOne({
          _id: ObjectId(req.body._id),
        });

        // returning a message
        return res.json({
          message: 'Note deleted successfully',
          success: true,
        });
      } catch (error) {
        // returning an error
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    }
  }
};


const books =require("../modles/Book")


//create book
const createBook = async (req, res) => {
    let {name,
    imageUrl,
    author,
    pages,
    price} = req.body;
  
    try {
      if (!(name && imageUrl && author && pages && price)) {
        res.json({ message: "All fields are required", status: false });
      } else {
        const book = await books.create({
            name,
            imageUrl,
            author,
            pages,
            price
         
        });
  
        if (!book) {
          res.json({ message: "books is not created", status: false });
        } else {
          res.json({
            message: "books is created successfully",
            data: book,
            status: true,
          });
        }
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };

  // get all book 

  const getallBook = async (req, res) => {
    try {
      const book = await books.find()
      if (!book) {
        res.json({ message: "there is no book", status: false });
      }
      res.json({
        message: "Found the Books details ",
        data: book,
        status: true,
      });
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


  // get one book by id

  const getoneBook = async (req, res) => {

    try {
      const book = await books.findOne({id:req.params._id});
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      }
      res.json({
        message: "Found the Books details ",
        data: book,
        status: true,
      });
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


  // update book data

  const UpdateBook = async (req, res) => {
    let { name,
        imageUrl,
        author,
        pages,
        price} = req.body;
    try {
      const book = await books.findOneAndUpdate({ id: req.params._id }
        , {name,
            imageUrl,
            author,
            pages,
            price});
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      } else {
        res.json({
          message: "Book has updated successsfully",
          data: book,
          status: true,
        });
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };
  

//Delete api 

const deleteBook = async (req, res) => {
    try {
      const book = await books.findOneAndDelete({ id: req.params.id });
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      } else {
        res.send({ message: "Books has deleted successfully", status: true });
      }
    } catch (error) {
      res.send({ message: error.message, status: false });
    }
  };
  


module.exports={createBook,getallBook,getoneBook,UpdateBook,deleteBook}
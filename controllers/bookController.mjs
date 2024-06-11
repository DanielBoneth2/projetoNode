import Book from '../models/Book.mjs';

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Falha na consulta do livro' });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Falha na consulta do livro' });
  }
};

export const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({ message: 'Livro criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao cadastrar o livro' });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.update(req.body);
      res.json(book);
    } else {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Falha na atualizado de dados' });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.json({ message: 'Livro removido com sucesso' });
    } else {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Falha em remover o livro' });
  }
};

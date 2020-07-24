const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; 
const { Article, Ticket } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> res.status(200).send({ message: 'Server on'}));


//  ----------   C R U D     A R T I C L E S   -----------

// C r e a t e 
app.post('/api/v1/articles', async (req, res) => {
    const newArticle = new Article(req.body); 
    try {
        const article = await newArticle.save(); 
        res.status(201).send(article);
    } catch (error) {
        console.error(error);
    }
})

// R e a d
app.get('/api/v1/articles', async(req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).send(articles);
    } catch (error) {
        console.error(error);
    }
})

app.get('/api/v1/articles/:articleid', async(req, res) => {
    try {
      const articleId = await Article.findById(req.params.articleid);
      res.status(200).send(articleId);
    } catch (error) {
        console.error(error);
    }
})


// U P D A T E
app.put('/api/v1/articles/:articleid', async(req, res) => {
    try {
      const article = await Article.findByIdAndUpdate(req.params.articleid, req.body, {new:true});
      res.status(200).send(article);
    } catch (error) {
        console.error(error)
    }
})

// NO FUNCIONAN LOS DOS PATCH, SE DEBE COMENTAR UNO --------
app.patch('/api/v1/articles/:articleid', async(req, res) => {
    try {
      const article = await Article.findByIdAndUpdate(req.params.articleid, {$set:{price:req.body.price}}, {new:true});
      res.status(200).send(article);
    } catch (error) {
        console.error(error)
    }
})


// D E L E T E
app.delete('/api/v1/articles/:articleid', async(req, res) => {
    try {
        await Article.findByIdAndUpdate(req.params.articleid, {$set:{is_active: false}}, {new: true});
        res.status(200).send({message: "Articulo eliminado"});
    } catch (error) {
        console.error(error)
    }
})





//  ----------   C R U D    T I C K E T S   -----------

// C r e a t e 
app.post('/api/v1/tickets', async (req, res) => {
    const newTicket = new Ticket(req.body); 
    try {
        const ticket = await newTicket.save(); 
        res.status(201).send(ticket);
    } catch (error) {
        console.error(error);
    }
})

// R e a d
app.get('/api/v1/tickets', async(req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).send(tickets);
    } catch (error) {
        console.error(error);
    }
})

app.get('/api/v1/tickets/:ticketid', async(req, res) => {
    try {
      const ticketId = await Ticket.findById(req.params.ticketid);
      res.status(200).send(ticketId);
    } catch (error) {
        console.error(error);
    }
})


// U P D A T E
app.put('/api/v1/tickets/:ticketid', async(req, res) => {
    try {
      const ticket = await Ticket.findByIdAndUpdate(req.params.ticketid, req.body, {new:true});
      res.status(200).send(ticket);
    } catch (error) {
        console.error(error)
    }
})

// NO FUNCIONAN LOS DOS PATCH, SE DEBE COMENTAR UNO --------
app.patch('/api/v1/tickets/:ticketid', async(req, res) => {
    try {
      const ticket = await Ticket.findByIdAndUpdate(req.params.ticketid, {$set:{subtotal:req.body.subtotal}}, {new:true});
      res.status(200).send(ticket);
    } catch (error) {
        console.error(error)
    }
})


// D E L E T E
app.delete('/api/v1/tickets/:ticketid', async(req, res) => {
    try {
        await Ticket.findByIdAndUpdate(req.params.ticketid, {$set:{is_active: false}}, {new: true});
        res.status(200).send({message: "Articulo eliminado"});
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, (err)=> err ? console.error(err) :console.info(`Server on port ${PORT}`));


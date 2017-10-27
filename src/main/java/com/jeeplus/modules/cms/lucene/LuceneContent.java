package com.jeeplus.modules.cms.lucene;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.*;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
/**
 * Created by jinhui1 on 2017/7/6.
 */
public class LuceneContent {

    public static Analyzer analyzer = null;
    public static Directory directory = null;
    public static String INDEX_DIR = System.getProperty("user.dir")+ File.separator+"testIndex";

    public static void main(String[] args) {
        System.out.println(INDEX_DIR);
    }

    public static void createIndex(String id,
                                   String title,
                                   String content) throws IOException {
        analyzer = new StandardAnalyzer();
        directory = FSDirectory.open(Paths.get(INDEX_DIR));
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        config.setOpenMode(IndexWriterConfig.OpenMode.CREATE_OR_APPEND);
        IndexWriter iwriter = new IndexWriter(directory, config);

        Document doc = new Document();
        doc.add(new StringField("id",id, Field.Store.YES));
        doc.add(new TextField("title", title, Field.Store.YES));
        doc.add(new TextField("content", content, Field.Store.YES));

        iwriter.addDocument(doc);

        iwriter.commit();
        iwriter.close();

        System.out.println("=====索引创建成功========");
    }

    public static void updateIndex(String id,
                                   String title,
                                   String content) throws IOException, ParseException {
        analyzer = new StandardAnalyzer();
        directory = FSDirectory.open(Paths.get(INDEX_DIR));
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        config.setOpenMode(IndexWriterConfig.OpenMode.CREATE_OR_APPEND);
        IndexWriter iwriter = new IndexWriter(directory, config);

        Document doc = new Document();
        doc.add(new StringField("id",id, Field.Store.YES));
        doc.add(new TextField("title", title, Field.Store.YES));
        doc.add(new TextField("content", content, Field.Store.YES));

        iwriter.updateDocument(new Term("id", id), doc);
        iwriter.commit();
        iwriter.close();

        System.out.println("=====索引更新成功========");

        serchIndex(title, title);
    }

    public static void deleteIndex(String id) throws IOException {
        analyzer = new StandardAnalyzer();
        directory = FSDirectory.open(Paths.get(INDEX_DIR));
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        config.setOpenMode(IndexWriterConfig.OpenMode.CREATE_OR_APPEND);
        IndexWriter iwriter = new IndexWriter(directory, config);

        iwriter.deleteDocuments(new Term("id", id));
        iwriter.commit();
        iwriter.close();

        System.out.println("=====删除创建成功========");
    }

    public static void serchIndex(String title,
                                  String content) throws IOException, ParseException {
        // Now search the index:
        analyzer = new StandardAnalyzer();
        directory = FSDirectory.open(Paths.get(INDEX_DIR));
        DirectoryReader ireader = DirectoryReader.open(directory);
        IndexSearcher isearcher = new IndexSearcher(ireader);
        // Parse a simple query that searches for "text":
        QueryParser parser = new QueryParser( "title", analyzer);
        QueryParser parser2 = new QueryParser( "content", analyzer);
        parser.setPhraseSlop(1);
        Query titleQuery = parser.parse(title);
        Query contentQuery = parser2.parse(content);

        BooleanClause titleClause =new BooleanClause(titleQuery, BooleanClause.Occur.SHOULD);
        BooleanClause contentClause =new BooleanClause(contentQuery, BooleanClause.Occur.SHOULD);

        BooleanQuery booleanQuery=new BooleanQuery.Builder()
                .add(titleClause).add(contentClause).build();

        ScoreDoc[] hits = isearcher.search(booleanQuery,  1000).scoreDocs;

        for (int i = 0; i < hits.length; i++) {
            Document hitDoc = isearcher.doc(hits[i].doc);
            System.out.println("title:" + hitDoc.get("title"));
            System.out.println("content:" + hitDoc.get("content"));
        }
        ireader.close();
        directory.close();
    }
}

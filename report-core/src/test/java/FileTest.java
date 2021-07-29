import org.junit.Test;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by raodeming on 2021/7/2.
 */
public class FileTest {


    @Test
    public void test1() throws IOException {
        String sql = "INSERT INTO `aj_report`.`gaea_file` (`id`, `file_id`, `file_type`, `file_path`, `url_path`, `file_instruction`, `create_by`, `create_time`, `update_by`, `update_time`, `version`) VALUES (default, '%s', 'png', '/app/aj-report/image/%s', 'https://report.anji-plus.com/file/download/%s', '%s', 'admin', '2021-07-02 10:04:55', 'admin', '2021-07-02 10:04:55', '1');\n";

        File paFile = new File("D:\\anji\\盖亚\\大屏设计\\png");
        PrintWriter pw = new PrintWriter(new FileWriter("D:\\anji\\盖亚\\大屏设计\\fileSql.sql", true));
        File[] files = paFile.listFiles();
        for (File file : files) {
            String name = file.getName();
            String fileName = name.split("\\.")[0];
            //System.out.println(fileName);

            String format = String.format(sql, fileName, name, fileName, fileName);
            System.out.println(format);
            pw.print(format);
        }
        pw.flush();
        pw.close();
    }
}

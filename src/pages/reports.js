import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import styled from "styled-components";

import Card, { CardTitle } from "../components/Cards";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Icon from "../components/Icon";

import reports from "../data/reports.json";

const ReportFileType = styled.p`
  color: ${({ theme: { colors } }) => colors.dark};
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 8px;
  line-height: 24px;
`;

const ReportIcon = styled(Icon).attrs({ icon: faFileDownload })`
  color: ${({ theme: { colors } }) => colors.action};
`;

const ReportTitle = styled(CardTitle)`
  color: ${({ theme: { colors } }) => colors.dark}
  margin: 0;
`;

const Reports = () => (
  <Container>
    <Head>
      <title>SEDS - Reports</title>
    </Head>

    <h2>Reports</h2>

    {reports.items
      .sort(({ fields: { code: code1 } }, { fields: { code: code2 } }) =>
        code1 > code2 ? 1 : -1
      )
      .map(({ fields: { file, title }, sys: { id } }) => (
        <a href={file.fields.file.url} key={id} target="_blank">
          <Card>
            <Flex alignItems="center" justifyContent="space-between">
              <ReportTitle>{title}</ReportTitle>

              <ReportIcon size="lg" />
            </Flex>

            <ReportFileType>
              .{file.fields.file.fileName.split(".").pop()}
            </ReportFileType>
          </Card>
        </a>
      ))}
  </Container>
);

export default Reports;

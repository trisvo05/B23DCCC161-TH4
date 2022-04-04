import Upload from '@/components/Upload/UploadMultiFile';
import rules from '@/utils/rules';
import { Button, Card, Col, Form, Input, Modal, Popconfirm, Row, Table } from 'antd';
import { useState } from 'react';
import { useModel } from 'umi';
import ViewEmail from './ViewEmail';

const CreateEmail = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const {
    recordPost,
    loading,
    SendEmailPreviewModel,
    SendEmailModel,
    visible,
    setVisible,
    dataTable,
    visibleTable,
    setVisibleTable,
  } = useModel('sendemail');
  const [preview, setPreview] = useState<boolean>(false);
  const [data, setData] = useState<object>({});
  const [cf, setCf] = useState<boolean>(false);

  function confirm() {
    setVisible(true);
    if (cf) {
      SendEmailModel(data);
      setVisibleTable(true);
      setVisible(false);
    }
  }

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      render: (_?: any, __?: any, index?: any) => index + 1,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  return (
    <>
      <Card title="Gửi Email">
        <Form
          scrollToFirstError
          labelCol={{ span: 24 }}
          onFinish={async (values) => {
            const content = values?.content;
            const subject = values?.subject;
            const file = values?.file?.fileList[0].originFileObj;
            if (preview) {
              SendEmailPreviewModel({ content, subject, file });
              setVisible(true);
            } else {
              SendEmailPreviewModel({ content, subject, file });
              setData({ content, subject, file });
              confirm();
            }
            form.resetFields();
          }}
          form={form}
        >
          <Row>
            <Col xs={24}>
              <Form.Item
                name="subject"
                label={`Tiêu đề`}
                initialValue={recordPost?.subject || ''}
                rules={[...rules.text]}
              >
                <Input placeholder="Tiêu đề" />
              </Form.Item>

              <Form.Item
                // initialValue={{ file: recordPost?.file?.fileList[0].originFileObj || '' }}
                rules={[...rules.fileRequired]}
                name="file"
                label={<b>Chọn tệp tin mà bạn muốn gửi</b>}
              >
                <Upload
                  otherProps={{
                    accept: '.xlsx',
                    multiple: true,
                    showUploadList: { showDownloadIcon: false },
                  }}
                  limit={1}
                />
              </Form.Item>

              <Form.Item
                name="content"
                label="Nội dung"
                initialValue={recordPost?.content || ''}
                rules={[...rules.text]}
              >
                <TextArea placeholder="Nhập nội dung lời nhắn" rows={6} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ textAlign: 'center', marginBottom: 0 }}>
            <Button loading={loading} type="primary" htmlType="submit">
              Gửi Email
            </Button>

            <Button
              loading={loading}
              style={{ marginLeft: 8 }}
              htmlType="submit"
              onClick={() => setPreview(true)}
            >
              Xem trước
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Modal
        width="80%"
        bodyStyle={{ padding: '50px' }}
        destroyOnClose
        footer={
          <Popconfirm title="Bạn có chắc chắn gửi không?" onConfirm={confirm}>
            <Button type="primary" onClick={() => setCf(true)}>
              Gửi email
            </Button>
          </Popconfirm>
        }
        visible={visible}
        onCancel={() => {
          setVisible(false);
          setPreview(false);
        }}
        title="Xem trước email"
      >
        <ViewEmail recordPost={recordPost} />
      </Modal>

      <Modal
        width="80%"
        bodyStyle={{ padding: '50px' }}
        destroyOnClose
        footer={
          <Button
            type="primary"
            onClick={() => {
              setVisibleTable(false);
            }}
          >
            OK
          </Button>
        }
        visible={visibleTable}
        onCancel={() => setVisibleTable(false)}
        title="Danh sách email đã gửi"
      >
        <Table dataSource={dataTable} columns={columns} />
      </Modal>
    </>
  );
};

export default CreateEmail;
